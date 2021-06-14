import SVG, { Path } from '@components/SVG';

const FileIcon: React.VFC = () => {
    const dimensions = {
        width: 20,
        height: 20,
    };

    const border = {
        top: 2,
        bottom: dimensions.width - 2,
        left: 4,
        right: dimensions.height - 4,
    };

    const inset = 4;
    const rounded = 2;

    return (
        <SVG {...dimensions}>
            <Path
                commands={[
                    { type: 'M', args: [border.left, border.top + rounded] },
                    {
                        type: 'Q',
                        args: [
                            border.left,
                            border.top,
                            border.left + rounded,
                            border.top,
                        ],
                    },
                    { type: 'L', args: [border.right - inset, border.top] },
                    { type: 'L', args: [border.right, border.top + inset] },
                    {
                        type: 'L',
                        args: [border.right, border.bottom - rounded],
                    },
                    {
                        type: 'Q',
                        args: [
                            border.right,
                            border.bottom,
                            border.right - rounded,
                            border.bottom,
                        ],
                    },
                    { type: 'L', args: [border.left + rounded, border.bottom] },
                    {
                        type: 'Q',
                        args: [
                            border.left,
                            border.bottom,
                            border.left,
                            border.bottom - rounded,
                        ],
                    },
                    { type: 'Z', args: [] },
                ]}
            />
            <Path
                commands={[
                    { type: 'M', args: [border.right - inset, border.top] },
                    {
                        type: 'L',
                        args: [border.right - inset, border.top + inset],
                    },
                    { type: 'L', args: [border.right, border.top + inset] },
                ]}
            />
        </SVG>
    );
};

export default FileIcon;
