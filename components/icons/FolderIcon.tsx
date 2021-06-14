import SVG, { Path } from '@components/SVG';

const FolderIcon: React.VFC = () => {
    const dimensions = {
        width: 20,
        height: 20,
    };

    const padding = {
        x: 2,
        y: 3,
    };
    const inset = padding.x + 0.5;
    const offset = padding.y + 3;

    return (
        <SVG {...dimensions}>
            <Path
                commands={[
                    { type: 'M', args: [padding.x, offset] },
                    {
                        type: 'L',
                        args: [dimensions.width - padding.x, offset],
                    },
                    {
                        type: 'L',
                        args: [
                            dimensions.width - inset,
                            dimensions.height - padding.y,
                        ],
                    },
                    {
                        type: 'L',
                        args: [inset, dimensions.height - padding.y],
                    },
                    { type: 'Z', args: [] },
                ]}
            />
            <Path
                commands={[
                    { type: 'M', args: [padding.x + 1, offset] },
                    {
                        type: 'L',
                        args: [padding.x + 1, padding.y],
                    },
                    {
                        type: 'L',
                        args: [dimensions.width / 2 - 2, padding.y],
                    },
                    {
                        type: 'Q',
                        args: [
                            dimensions.width / 2,
                            padding.y,
                            dimensions.width / 2,
                            padding.y + 0.5,
                        ],
                    },
                    {
                        type: 'Q',
                        args: [
                            dimensions.width / 2,
                            padding.y + 1,
                            dimensions.width / 2 + 2,
                            padding.y + 1,
                        ],
                    },
                    {
                        type: 'L',
                        args: [dimensions.width - padding.x - 1, padding.y + 1],
                    },
                    {
                        type: 'L',
                        args: [dimensions.width - padding.x - 1, offset],
                    },
                ]}
            />
        </SVG>
    );
};

export default FolderIcon;
