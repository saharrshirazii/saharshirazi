import { useState } from 'react'

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'saharr.shirazii@gmail.com',
    href: 'mailto:saharr.shirazii@gmail.com',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-.83.67-1.5 1.5-1.5h16.5c.83 0 1.5.67 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75Zm1.5 0 8.25 6 8.25-6" />
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/saharrshirazii',
    href: 'https://github.com/saharrshirazii',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4-1 4-4.5 0-1-.4-1.9-1-2.6.1-.3.4-1.3-.1-2.6 0 0-.9-.3-2.9 1a10 10 0 0 0-5 0c-2-1.3-2.9-1-2.9-1-.5 1.3-.2 2.3-.1 2.6-.6.7-1 1.6-1 2.6 0 3.5 2 4.3 4 4.5-.4.4-.5.8-.5 1.5V19" />
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sahar-shirazii',
    href: 'https://www.linkedin.com/in/sahar-shirazii/',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.75h2.25V19H4.5V9.75Zm1.125-4.5a1.313 1.313 0 1 1 0 2.625 1.313 1.313 0 0 1 0-2.625ZM9.75 9.75H12v1.27c.44-.7 1.36-1.52 2.8-1.52 2.06 0 3.45 1.36 3.45 4.11V19H15.9v-4.86c0-1.2-.43-2.02-1.5-2.02-.82 0-1.31.55-1.52 1.09-.08.19-.1.46-.1.72V19H10.5c.03-6.15 0-9.25 0-9.25Z" />
    ),
  },
]

function FormField({ label, id, placeholder, type = 'text', textarea = false }) {
  const Component = textarea ? 'textarea' : 'input'
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </label>
      <Component
        id={id}
        name={id}
        type={textarea ? undefined : type}
        rows={textarea ? 3 : undefined}
        placeholder={placeholder}
        className="mt-1 w-full border-b border-slate-300 bg-transparent py-2 text-slate-700 outline-none placeholder:text-slate-400 focus:border-violet-500 dark:border-slate-600 dark:text-slate-200"
      />
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target

    setStatus('sending')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        }),
      })

      if (!response.ok) throw new Error('Request failed')

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800 sm:text-3xl dark:text-slate-100">
            Have a project in mind or just want to say hello?
            <br />
            I'd love to hear from you.
          </h2>

          <ul className="mt-10 flex flex-col gap-6">
            {CONTACT_LINKS.map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-500 dark:text-violet-300 dark:bg-violet-500/10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    {item.icon}
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{item.label}</p>
                  <a href={item.href} className="text-slate-700 hover:text-[#6d06ce] dark:text-slate-200">
                    {item.value}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <FormField label="Name" id="name" placeholder="Your name" />
          <FormField label="Email" id="email" placeholder="you@domain.com" type="email" />
          <FormField label="Message" id="message" placeholder="Tell me about the project" textarea />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-2 rounded-lg bg-[#8226d3] py-3 text-sm font-medium tracking-wide text-white uppercase transition-colors hover:bg-[#6d06ce] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              Thanks for reaching out — I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600 dark:text-red-400">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
