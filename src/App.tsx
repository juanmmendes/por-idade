import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, Globe, MapPin, MessageCircle } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="images/Logo.png" alt="Logo Marinho Mendes" className="h-9 w-9 rounded-2xl object-contain bg-emerald-50" />
            <div className="leading-tight">
              <p className="font-semibold">Marinho Mendes Sociedade de Advogados</p>
              <p className="text-xs text-gray-500">Atuação nacional • Atendimento mediante agendamento</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#requisitos" className="hover:text-emerald-700">Requisitos</a>
            <a href="#como-confirmar" className="hover:text-emerald-700">Como confirmar</a>
            <a href="#form" className="hover:text-emerald-700">Enviar seus dados</a>
            <a href="#contato" className="hover:text-emerald-700">Contato</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/5519974100605"
              className="rounded-2xl border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
              aria-label="Falar conosco no WhatsApp"
            >
              WhatsApp oficial
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Aposentadoria por Idade Urbana <span className="text-emerald-700">(2025)</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Saiba se você <span className="font-semibold">ou um familiar</span> já tem direito: idade mínima de
              <span className="font-semibold"> 62 anos (mulheres)</span> e <span className="font-semibold">65 anos (homens)</span>,
              com <span className="font-semibold">carência de 180 contribuições</span> ao INSS.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#requisitos" className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700">
                Ver requisitos (2025)
              </a>
              <a href="#form" className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 font-medium hover:bg-gray-50">
                Enviar meus dados com segurança
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl border p-3">Atendimento humanizado</div>
              <div className="rounded-2xl border p-3">Análise documental</div>
              <div className="rounded-2xl border p-3">Orientação jurídica responsável</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border">
              <img
                src="images/hero-familia-aposentadoria.png"
                alt="Família recebendo orientação previdenciária"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold">Para quem é</h2>
            <p className="mt-2 text-gray-600">Situações comuns que atendemos no dia a dia:</p>
          </div>
          <ul className="md:col-span-2 grid gap-3 text-gray-800">
            <li className="rounded-2xl bg-white p-4 shadow-sm">Tem idade mínima, mas não sabe se completou os <strong>15 anos (180 contribuições)</strong>.</li>
            <li className="rounded-2xl bg-white p-4 shadow-sm">Teve empregos com e sem carteira, e quer saber se o <strong>tempo está reconhecido</strong>.</li>
            <li className="rounded-2xl bg-white p-4 shadow-sm">Viu <strong>vínculos ausentes, salários zerados</strong> ou dados incorretos no CNIS.</li>
            <li className="rounded-2xl bg-white p-4 shadow-sm">É autônomo/MEI e precisa avaliar <strong>regularização em atraso</strong>.</li>
            <li className="rounded-2xl bg-white p-4 shadow-sm">Quer evitar <strong>indeferimentos</strong> e entender o <strong>momento certo</strong> de pedir.</li>
          </ul>
        </div>
      </section>

      {/* Requisitos 2025 */}
      <section id="requisitos">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold">Requisitos (2025)</h2>
            <p className="mt-2 text-gray-600">Regras vigentes para aposentadoria por idade urbana.</p>
          </div>
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl border">
              <table className="w-full text-left">
                <thead className="bg-gray-100 text-sm">
                  <tr>
                    <th className="px-4 py-3">Critério</th>
                    <th className="px-4 py-3">Mulheres</th>
                    <th className="px-4 py-3">Homens</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3 font-medium">Idade mínima</td>
                    <td className="px-4 py-3">62 anos</td>
                    <td className="px-4 py-3">65 anos</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Carência</td>
                    <td className="px-4 py-3" colSpan={2}>180 contribuições mensais ao INSS (15 anos)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-600">Importante: a carência considera contribuições válidas e registradas no CNIS.</p>
          </div>
        </div>
      </section>

      {/* Como confirmar */}
      <section id="como-confirmar" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold">Como confirmar o seu direito</h2>
            <p className="mt-2 text-gray-600">Passos práticos para agir com segurança.</p>
          </div>
          <ol className="md:col-span-2 grid gap-3">
            <li className="rounded-2xl bg-white p-4 shadow-sm"><strong>1) Consulte o CNIS no Meu INSS:</strong> confira vínculos e remunerações; identifique lacunas.</li>
            <li className="rounded-2xl bg-white p-4 shadow-sm"><strong>2) Some as contribuições válidas:</strong> cada mês conta para a carência.</li>
            <li className="rounded-2xl bg-white p-4 shadow-sm"><strong>3) Avalie regularização em atraso:</strong> especialmente para autônomos/MEIs.</li>
            <li className="rounded-2xl bg-white p-4 shadow-sm"><strong>4) Revise documentos:</strong> CTPS, recibos, carnês, contratos e outros comprovantes.</li>
            <li className="rounded-2xl bg-white p-4 shadow-sm"><strong>5) Faça uma análise jurídica:</strong> simule cenários e evite indeferimentos.</li>
          </ol>
        </div>
      </section>

      {/* Erros comuns no CNIS */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold">Erros comuns no CNIS</h2>
            <p className="mt-2 text-gray-600">Problemas que podem reduzir valor ou atrasar o benefício.</p>
          </div>
          <ul className="md:col-span-2 grid gap-3">
            <li className="rounded-2xl bg-white p-4 shadow-sm">Vínculos ausentes ou com <strong>remuneração zerada</strong>.</li>
            <li className="rounded-2xl bg-white p-4 shadow-sm">Datas de entrada/saída inconsistentes.</li>
            <li className="rounded-2xl bg-white p-4 shadow-sm">Contribuições recolhidas com <strong>código incorreto</strong>.</li>
            <li className="rounded-2xl bg-white p-4 shadow-sm">Períodos concomitantes sem critério de cômputo adequado.</li>
          </ul>
        </div>
      </section>

      {/* Como podemos ajudar (sem promessas) */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold">Como podemos ajudar</h2>
            <p className="mt-2 text-gray-700">Atuação jurídica técnica e responsável, conforme normas da OAB.</p>
          </div>
          <ul className="md:col-span-2 grid gap-3">
            <li className="rounded-2xl border p-4">Análise do CNIS e de documentos, com identificação de pendências.</li>
            <li className="rounded-2xl border p-4">Orientações sobre regularização/retificação e enquadramento de contribuições.</li>
            <li className="rounded-2xl border p-4">Simulação de cenários e avaliação do melhor momento para requerer.</li>
            <li className="rounded-2xl border p-4">Acompanhamento do protocolo administrativo perante o INSS.</li>
          </ul>
        </div>
      </section>

      {/* Formulário */}
      <section id="form">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <div className="rounded-3xl border p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Envie seus dados com segurança</h2>
            <p className="mt-2 text-gray-600">Usaremos as informações para entender sua situação e retornar o contato.</p>
            <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={(e)=>e.preventDefault()}>
              <div>
                <label className="mb-1 block text-sm font-medium">Nome completo</label>
                <input className="w-full rounded-xl border px-3 py-2" placeholder="Seu nome" required />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">E-mail</label>
                  <input type="email" className="w-full rounded-xl border px-3 py-2" placeholder="voce@email.com" required />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Telefone</label>
                  <input className="w-full rounded-xl border px-3 py-2" placeholder="(19) 00000-0000" required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Idade</label>
                  <input type="number" min={0} className="w-full rounded-xl border px-3 py-2" placeholder="Ex.: 62" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Tempo aproximado de contribuição</label>
                  <input className="w-full rounded-xl border px-3 py-2" placeholder="Ex.: 17 anos e 4 meses" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Conte-nos resumidamente sua situação</label>
                <textarea className="w-full rounded-xl border px-3 py-2" rows={5} placeholder="Descreva dúvidas, vínculos ausentes no CNIS, períodos sem registro, etc." />
              </div>
              <div className="flex items-start gap-3">
                <input id="lgpd" type="checkbox" className="mt-1" required />
                <label htmlFor="lgpd" className="text-sm text-gray-700">Li e concordo com o uso das minhas informações para contato e análise inicial, nos termos da LGPD.</label>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <button type="submit" className="rounded-2xl bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700">Enviar informações</button>
                <a href="https://wa.me/5519974100605" className="text-sm text-emerald-700 hover:underline">ou falar pelo WhatsApp oficial</a>
              </div>
            </form>
            <p className="mt-3 text-xs text-gray-500">Conteúdo informativo. Cada caso é analisado de forma individualizada. Não oferecemos promessas de resultado.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold">Perguntas frequentes</h2>
            <p className="mt-2 text-gray-600">Dúvidas comuns sobre a aposentadoria por idade urbana.</p>
          </div>
          <div className="md:col-span-2 grid gap-3">
            <details className="rounded-2xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-medium">Só a idade garante a aposentadoria?</summary>
              <p className="mt-2 text-gray-700">Não. Além da idade, é necessária a carência de 180 contribuições válidas e registradas.</p>
            </details>
            <details className="rounded-2xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-medium">Carência é o mesmo que tempo total trabalhado?</summary>
              <p className="mt-2 text-gray-700">Não. Carência considera meses efetivamente contribuídos; períodos sem contribuição não contam.</p>
            </details>
            <details className="rounded-2xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-medium">Posso pagar contribuições em atraso?</summary>
              <p className="mt-2 text-gray-700">Em alguns casos, sim (ex.: contribuintes individuais/MEI). É necessária avaliação técnica para viabilidade e impacto.</p>
            </details>
            <details className="rounded-2xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-medium">Quanto tempo leva a análise do INSS?</summary>
              <p className="mt-2 text-gray-700">Varia conforme a demanda e a completude do processo. Uma instrução correta tende a reduzir atrasos.</p>
            </details>
            <details className="rounded-2xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer font-medium">Como é calculado o valor do benefício?</summary>
              <p className="mt-2 text-gray-700">Considera-se a média das contribuições conforme regras vigentes após a EC 103/2019 e critérios legais correlatos.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Sobre o escritório + Contato */}
      <section id="contato">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold">Sobre o escritório</h2>
            <p className="mt-2 text-gray-600">Somos um escritório independente e de atuação diversificada, pautado por <strong className="font-semibold">ética, excelência técnica e disponibilidade</strong>. Representamos clientes em todo o território nacional e realizamos atendimento mediante agendamento. Nosso propósito é oferecer <strong className="font-semibold">suporte integral</strong> para viabilizar negócios e solucionar problemas com rapidez e eficiência, com comunicação acessível ao segurado e à família. Atuamos de forma integrada nas frentes consultiva e contenciosa, com experiência em Direito Previdenciário e interface com áreas cível, trabalhista e societária.</p>
            <img src="images/escritorio-mm.jpg" alt="Escritório Marinho Mendes" className="mt-4 w-full rounded-2xl object-cover aspect-[16/10]" loading="lazy" />
          </div>
          <div className="md:col-span-2 grid gap-6">
            {/* Canais oficiais */}
            <div className="rounded-2xl border p-4" data-testid="official-channels">
              <p className="text-sm text-gray-600">Canais oficiais</p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-gray-50" href="mailto:adm@marinhomendes.adv.br" target="_blank" rel="noreferrer noopener">
                  <Mail size={18} aria-hidden="true" />
                  <span>adm@marinhomendes.adv.br</span>
                </a>
                <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-gray-50" href="https://wa.me/5519974100605" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp oficial">
                  <MessageCircle size={18} aria-hidden="true" />
                  <span>WhatsApp: +55 (19) 97410-0605</span>
                </a>
                <div className="inline-flex items-center gap-2 rounded-xl border px-3 py-2">
                  <Phone size={18} aria-hidden="true" />
                  <span>Telefones: (19) 3845-4946 | (19) 3209-0417</span>
                </div>
                <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-gray-50" href="https://marinhomendes.adv.br/" target="_blank" rel="noreferrer noopener">
                  <Globe size={18} aria-hidden="true" />
                  <span>Site institucional</span>
                </a>
                <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-gray-50" href="https://marinhomendes.adv.br/blog" target="_blank" rel="noreferrer noopener">
                  <Globe size={18} aria-hidden="true" />
                  <span>Blog</span>
                </a>
                <div className="flex items-center gap-4">
                  <a className="inline-flex items-center gap-2 hover:underline" href="https://www.facebook.com/marinhomendesadv" target="_blank" rel="noreferrer noopener" aria-label="Facebook">
                    <Facebook size={18} aria-hidden="true" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a className="inline-flex items-center gap-2 hover:underline" href="https://www.instagram.com/marinhomendesadv" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
                    <Instagram size={18} aria-hidden="true" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a className="inline-flex items-center gap-2 hover:underline" href="https://www.linkedin.com/company/14030512/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                    <Linkedin size={18} aria-hidden="true" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Endereços com destaque */}
            <div className="rounded-3xl border-2 border-emerald-600 p-6" data-testid="locations-block">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin size={20} aria-hidden="true" /> Nossas Unidades
              </h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border p-4 bg-white">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Campinas</p>
                  <p className="mt-1 text-gray-800">Av. José Rocha Bonfim, 214, Bloco J – Sala 228 – Ed. Milão, Praça Capital, Loteamento Center Santa Genebra, CEP 13080-650.</p>
                  <p className="mt-1 text-sm text-gray-700">Fone: (19) 3209-0417</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                    <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-emerald-50" href="https://www.google.com/maps?q=Av.+Jos%C3%A9+Rocha+Bonfim,+214,+Bloco+J,+Sala+228,+Ed.+Mil%C3%A3o,+Pra%C3%A7a+Capital,+Campinas,+SP+13080-650" target="_blank" rel="noreferrer noopener">
                      <MapPin size={16} aria-hidden="true" /> Traçar rota
                    </a>
                    <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-emerald-50" href="tel:+551932090417">
                      <Phone size={16} aria-hidden="true" /> Ligar
                    </a>
                  </div>
                </div>
                <div className="rounded-2xl border p-4 bg-white">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Hortolândia</p>
                  <p className="mt-1 text-gray-800">Rua Antônio Nelson Barbosa, 93 – Jardim do Bosque, CEP 13186-231.</p>
                  <p className="mt-1 text-sm text-gray-700">Fone/Fax: (19) 3845-4946</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                    <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-emerald-50" href="https://www.google.com/maps?q=Rua+Ant%C3%B4nio+Nelson+Barbosa,+93,+Hortol%C3%A2ndia,+SP+13186-231" target="_blank" rel="noreferrer noopener">
                      <MapPin size={16} aria-hidden="true" /> Traçar rota
                    </a>
                    <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-emerald-50" href="tel:+551938454946">
                      <Phone size={16} aria-hidden="true" /> Ligar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avisos OAB e Jurídicos */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="rounded-2xl border p-5 text-sm text-gray-600">
            <p className="font-medium">Avisos legais e conformidade (OAB)</p>
            <ul className="mt-2 list-disc pl-5 space-y-2">
              <li>Conteúdo meramente informativo e educacional, sem promessa de resultado.</li>
              <li>Atuação profissional condicionada à análise individual do caso e à celebração de contrato.</li>
              <li>Respeito às normas éticas da OAB e às disposições do Provimento 205/2021.</li>
              <li>Proteção de dados pessoais conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Marinho Mendes Sociedade de Advogados. Todos os direitos reservados.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/marinhomendesadv" target="_blank" rel="noreferrer noopener" aria-label="Facebook"><Facebook size={18} aria-hidden="true" /></a>
              <a href="https://www.instagram.com/marinhomendesadv" target="_blank" rel="noreferrer noopener" aria-label="Instagram"><Instagram size={18} aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/company/14030512/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"><Linkedin size={18} aria-hidden="true" /></a>
            </div>
            <div className="flex gap-4">
              <a href="#requisitos" className="hover:underline">Requisitos</a>
              <a href="#form" className="hover:underline">Enviar dados</a>
              <a href="#contato" className="hover:underline">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
