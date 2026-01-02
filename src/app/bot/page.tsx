import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import NextBotForm from "../components/nextbot-form"

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <nav className="border-b border-slate-800/50 px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition">
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>
      </nav>
      <main className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2 text-center">Pregúntale lo que quieras a NextBot</h1>
          <p className="text-slate-400 text-center mb-12">Recibe respuestas instantáneas a tus preguntas sobre desarrollo web.</p>
          <NextBotForm />
        </div>
      </main>
    </div>
  )
}
