import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Mail, Send } from 'lucide-react';
import { LINKS } from '../constants';

const Contacts: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#050505] flex items-center justify-center relative">
        <div className="glow-blob top-0 right-0 opacity-20"></div>

        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12">
            <Section>
                <h1 className="text-4xl font-bold text-white mb-6">Свяжитесь со мной</h1>
                <p className="text-neutral-400 mb-8">
                    Есть вопросы по шаблонам? Хотите предложить сотрудничество или нашли ошибку? Я всегда на связи.
                </p>

                <div className="space-y-6">
                    <div className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-4">
                        <div className="p-3 bg-neutral-800 rounded-full text-white">
                            <Mail size={24} />
                        </div>
                        <div>
                            <div className="text-xs text-neutral-500 uppercase font-bold">Email</div>
                            <div className="text-white text-lg">{LINKS.CONTACT_EMAIL}</div>
                        </div>
                    </div>
                    
                    <div className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-4">
                        <div className="p-3 bg-blue-600 rounded-full text-white">
                            <Send size={24} />
                        </div>
                        <div>
                            <div className="text-xs text-neutral-500 uppercase font-bold">Telegram</div>
                            <div className="text-white text-lg">{LINKS.CONTACT_TELEGRAM}</div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section delay={100}>
                <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl border border-white/5 space-y-6">
                    {submitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-12">
                            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                                <Send size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Спасибо!</h3>
                            <p className="text-neutral-400">Я отвечу вам в ближайшее время.</p>
                        </div>
                    ) : (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-neutral-400 mb-2">Ваше имя</label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Иван"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    required
                                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="ivan@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-400 mb-2">Сообщение</label>
                                <textarea 
                                    rows={4}
                                    required
                                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="Ваш вопрос..."
                                />
                            </div>
                            <Button fullWidth type="submit">Отправить</Button>
                        </>
                    )}
                </form>
            </Section>
        </div>
    </div>
  );
};

export default Contacts;