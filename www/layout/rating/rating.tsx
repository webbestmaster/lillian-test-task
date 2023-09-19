import ratingStyle from './rating.scss';
import {ratingFilledStarLine, ratingStarLine} from './rating-const';

type RatingPropsType = {
    readonly className?: string;
    readonly ratingPercent: number;
    readonly starSize: number;
};

export function Rating(props: RatingPropsType): JSX.Element {
    const {ratingPercent, starSize, className = ''} = props;

    return (
        <div className={`${ratingStyle.rating} ${className}`.trim()} style={{fontSize: `${starSize}px`}}>
            <div className={ratingStyle.rating__stars}>{ratingStarLine}</div>
            <div className={ratingStyle.rating__stars_filled} style={{width: `${ratingPercent}%`}}>
                {ratingFilledStarLine}
            </div>
        </div>
    );
}
