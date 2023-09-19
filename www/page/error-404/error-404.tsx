import page404Style from './page-404.scss';

export function Error404(): JSX.Element {
    return (
        <div>
            <h1 className={page404Style.page_404_header} data-text="Page 404">
                Page 404
            </h1>
        </div>
    );
}
