"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Code, Palette, Rocket } from 'lucide-react';

export function IncubitPromo() {
    return (
        <section className="brutal-border p-8 bg-white dark:bg-black my-16">
            <div className="text-center mb-12">
                <h2 className="brutal-text text-3xl font-black mb-4" style={{ color: '#FFD600' }}>Powered by Incubit</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Your trusted partner in digital innovation. We transform ideas into exceptional digital experiences.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
                <Card className="brutal-border p-6 flex flex-col items-center text-center">
                    <Code className="h-12 w-12 mb-4" style={{ color: '#FFD600' }} />
                    <h3 className="brutal-text text-xl font-bold mb-2" >Custom Development</h3>
                    <p className="text-sm text-muted-foreground">
                        Tailored solutions built with cutting-edge technology for your unique needs.
                    </p>
                </Card>

                <Card className="brutal-border p-6 flex flex-col items-center text-center">
                    <Palette className="h-12 w-12 mb-4" style={{ color: '#FFD600' }} />
                    <h3 className="brutal-text text-xl font-bold mb-2">Creative Design</h3>
                    <p className="text-sm text-muted-foreground">
                        Beautiful, intuitive interfaces that engage and delight your users.
                    </p>
                </Card>

                <Card className="brutal-border p-6 flex flex-col items-center text-center">
                    <Rocket className="h-12 w-12 mb-4" style={{ color: '#FFD600' }} />
                    <h3 className="brutal-text text-xl font-bold mb-2" >Digital Growth</h3>
                    <p className="text-sm text-muted-foreground">
                        Strategic solutions to scale your digital presence and impact.
                    </p>
                </Card>
            </div>

            <div className="text-center">
                <Button 
                    asChild
                    size="lg"
                    className="brutal-button text-lg px-8 py-6 group"
                    style={{ backgroundColor: '#FFD600', color: '#000' }}
                >
                    <a 
                        href="https://incubit.nl" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        Work with Incubit
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </Button>
            </div>
        </section>
    );
}