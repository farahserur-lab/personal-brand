export default function ContactContent() {
  return (
    <div className="p-6 font-retro">
      <h2 className="text-2xl font-bold mb-4 text-win95-blue">Contact Me</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📧</span>
          <div>
            <div className="text-xs text-gray-600">Email</div>
            <a href="mailto:your.email@example.com" className="text-sm text-blue-600 hover:underline">
              your.email@example.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl">🐙</span>
          <div>
            <div className="text-xs text-gray-600">GitHub</div>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
              github.com/yourusername
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl">💼</span>
          <div>
            <div className="text-xs text-gray-600">LinkedIn</div>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
              linkedin.com/in/yourprofile
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl">🐦</span>
          <div>
            <div className="text-xs text-gray-600">Twitter</div>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
              @yourusername
            </a>
          </div>
        </div>
      </div>

      <div className="win95-border p-4 bg-win95-gray">
        <h3 className="font-bold text-sm mb-3">Send a Message</h3>
        <form className="space-y-3">
          <div>
            <label className="text-xs block mb-1">Name:</label>
            <input
              type="text"
              className="w-full p-2 win95-border text-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs block mb-1">Email:</label>
            <input
              type="email"
              className="w-full p-2 win95-border text-sm"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-xs block mb-1">Message:</label>
            <textarea
              className="w-full p-2 win95-border text-sm resize-none"
              rows="4"
              placeholder="Your message..."
            />
          </div>
          <button type="submit" className="win95-button px-6 py-2 text-sm font-bold">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
