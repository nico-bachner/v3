export interface SectionProps {
    variant: 'h1' | 'h2';
    title: string;
}

const Section = (section: React.PropsWithChildren<SectionProps>) => {
    switch (section.variant) {
        case 'h1':
            return (
                <section className="my-16 sm:my-20">
                    <h1 className="mb-4">{section.title}</h1>
                    {section.children}
                </section>
            );
        case 'h2':
            return (
                <section className="my-16 sm:my-20">
                    <h2 className="mb-4">{section.title}</h2>
                    {section.children}
                </section>
            );
    }
};

export default Section;
