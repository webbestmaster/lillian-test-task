/* global document, MouseEvent, HTMLDivElement */

import {useEffect, useRef, useState, useMemo} from 'react';

import {Locale} from '../../provider/locale/locale-context';

import sortStyle from './sort.scss';
import {sortList} from './sort-const';
import {SortIdEnum, SortItemType} from './sort-type';

type SortPropsType = {
    readonly isSortAsc: boolean;
    readonly setIsSortAsc: (isSortAsc: boolean) => void;
    readonly setSortId: (sortId: SortIdEnum) => void;
    readonly sortId: SortIdEnum;
};

export function Sort(props: SortPropsType): JSX.Element {
    const {setIsSortAsc, setSortId, isSortAsc, sortId} = props;
    const wrapperRef = useRef<HTMLDivElement>(document.createElement('div'));
    const [isSortOpen, setIsSortOpen] = useState<boolean>(false);

    useEffect(() => {
        function handleBodyOnClick(evt: MouseEvent) {
            const hasWrapperInPath = evt.composedPath().includes(wrapperRef.current);

            if (hasWrapperInPath) {
                return;
            }

            setIsSortOpen(false);
        }

        document.body.addEventListener('click', handleBodyOnClick, false);

        return () => {
            document.body.removeEventListener('click', handleBodyOnClick, false);
        };
    }, []);

    const sortingButtons: JSX.Element | null = useMemo((): JSX.Element | null => {
        if (!isSortOpen) {
            return null;
        }

        return (
            <ul className={sortStyle.sort__list}>
                {sortList.map((sortItem: SortItemType): JSX.Element => {
                    const isActiveSorting = sortItem.sortId === sortId;
                    const className = isActiveSorting
                        ? `${sortStyle.sort__item_button} ${sortStyle.sort__item_button__active}`
                        : sortStyle.sort__item_button;

                    return (
                        <li className={sortStyle.sort__item} key={sortItem.sortId}>
                            <button
                                className={className}
                                onClick={() => {
                                    setSortId(sortItem.sortId);
                                    if (sortItem.sortId === sortId) {
                                        setIsSortAsc(!isSortAsc);
                                    }
                                }}
                                type="button"
                            >
                                <Locale stringKey={sortItem.langKey} />
                                {isActiveSorting ? (
                                    <span className={sortStyle.sort__item__arrow}>{isSortAsc ? '↑' : '↓'}</span>
                                ) : (
                                    <span className={sortStyle.sort__item__arrow} />
                                )}
                            </button>
                        </li>
                    );
                })}
            </ul>
        );
    }, [isSortAsc, isSortOpen, setIsSortAsc, setSortId, sortId]);

    return (
        <div className={sortStyle.sort} ref={wrapperRef}>
            <button className={sortStyle.sort__button} onClick={() => setIsSortOpen(!isSortOpen)} type="button">
                <Locale stringKey="SORT__SORT_BY" />
            </button>

            {sortingButtons}
        </div>
    );
}
