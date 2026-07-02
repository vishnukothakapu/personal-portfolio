"use client";
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

const GithubActivity = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [blockSize, setBlockSize] = useState(14);
    const [blockMargin, setBlockMargin] = useState(5);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !containerRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                // The exact available width inside the container
                const availableWidth = entry.contentRect.width;
                const blocks = 53; // ~53 weeks in a year

                // Calculate the perfect block size to fit exactly in the available width
                if (availableWidth < 750) {
                    const margin = 2;
                    const size = Math.floor((availableWidth - (blocks * margin)) / blocks);
                    setBlockSize(Math.max(2, size));
                    setBlockMargin(margin);
                } else if (availableWidth < 900) {
                    const margin = 4;
                    const size = Math.floor((availableWidth - (blocks * margin)) / blocks);
                    setBlockSize(Math.max(4, size));
                    setBlockMargin(margin);
                } else {
                    setBlockSize(14);
                    setBlockMargin(5);
                }
            }
        });

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [mounted]);

    const isDark = mounted && resolvedTheme === "dark";

    return (
        <section className="py-24 bg-white dark:bg-black" id="github-activity">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-black dark:from-neutral-50 dark:to-neutral-400 tracking-tight">
                        GitHub Activity
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                        My daily coding routine and contributions
                    </p>
                </div>

                <div className="w-full py-4 md:py-8 flex items-center justify-center">
                    {mounted ? (
                        <div 
                            ref={containerRef}
                            className="w-full flex justify-center text-gray-900 dark:text-gray-100 [&_article>div]:!overflow-hidden [&_article>div]:!overflow-x-hidden"
                        >
                            <GitHubCalendar 
                                username="vishnukothakapu" 
                                colorScheme={isDark ? "dark" : "light"}
                                blockSize={blockSize}
                                blockMargin={blockMargin}
                                fontSize={blockSize < 10 ? 10 : 14}
                            />
                        </div>
                    ) : (
                        <div className="h-[150px] w-full animate-pulse bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default GithubActivity;
