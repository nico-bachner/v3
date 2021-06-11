export interface SectionProps {
    variant: 'h2' | 'h3';
    title: string;
}

const Section: React.FC<SectionProps> = (section) => {
    switch (section.variant) {
        case 'h2':
            return (
                <section className="my-16 sm:my-20">
                    <h2 className="mb-4">{section.title}</h2>
                    {section.children}
                </section>
            );
        case 'h3':
            return (
                <section className="my-12 sm:my-16">
                    <h3 className="mb-4">{section.title}</h3>
                    {section.children}
                </section>
            );
    }
};

export default Section;
