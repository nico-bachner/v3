import styles from './Details.module.css';

import { useState } from 'react';

import { Button } from '@nico-bachner/components-react';

type DetailsProps = {
    summary: React.ReactChild;
};

const Details: React.FC<DetailsProps> = ({ summary, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.details}>
            <Button
                onClick={() => {
                    setOpen(!open);
                }}
            >
                {summary}
            </Button>

            {open && children}
        </div>
    );
};

export default Details;
