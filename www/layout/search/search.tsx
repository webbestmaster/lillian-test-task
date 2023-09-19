/* global HTMLInputElement */

import {SyntheticEvent} from 'react';

import {useLocale} from '../../provider/locale/locale-context';

import searchStyle from './search.scss';

type SearchPropsType = {
    readonly className?: string;
    readonly setSearchValue: (search: string) => void;
};

export function Search(props: SearchPropsType): JSX.Element {
    const {className = '', setSearchValue} = props;
    const {getLocalizedString} = useLocale();

    return (
        <div className={`${searchStyle.search} ${className}`.trim()}>
            <input
                className={searchStyle.search__input}
                onInput={(evt: SyntheticEvent<HTMLInputElement>) => {
                    setSearchValue(evt.currentTarget.value.trim());
                }}
                placeholder={getLocalizedString('SEARCH__TYPE_TO_FILTER')}
                type="text"
            />
            <div className={searchStyle.search__icon} />
        </div>
    );
}
