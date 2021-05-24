import styles from './Select.module.css';

import { useI18n } from '@lib/hooks/i18n';

interface SelectProps {
    id: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    default?: string | number | readonly string[];
}

const ArticleCard: React.FC<SelectProps> = (select) => {
    const i18n = useI18n();

    return (
        <>
            <label htmlFor={'#' + select.id} className="sr-only">
                {i18n.actions.changeLanguage}
            </label>
            <select
                id={select.id}
                onChange={select.onChange}
                defaultValue={select.default}
                className={`py-1 pl-3 pr-8 text-center transition duration-100 ease-in-out border rounded hover:border-strong ${styles.select}`}
            >
                {select.children}
            </select>
        </>
    );
};

export default ArticleCard;
