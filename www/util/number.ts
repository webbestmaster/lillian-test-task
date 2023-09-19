import {ExternalRatingType} from '../hook/use-movie/use-movie-type';

const latinNumberList: Array<string> = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

export function numberToLatinNumber(value: number): string {
    return latinNumberList.at(value - 1) || value.toString(10);
}

export function getAverageRating(ratingList: Array<ExternalRatingType>): number {
    const ratingPercentList: Array<number> = [];

    ratingList.forEach((externalRating: ExternalRatingType) => {
        const {Value: rating} = externalRating;

        if (/^\d\.\d\/10$/.test(rating)) {
            ratingPercentList.push(Number.parseFloat(rating) * 10);
            return;
        }

        if (/^\S+(%|\/100)$/.test(rating)) {
            ratingPercentList.push(Number.parseFloat(rating));
            return;
        }

        console.error(`getAverageRating: can not get rating from ${JSON.stringify(externalRating)}`);
    });

    const percentSum: number = ratingPercentList.reduce<number>((accumulator: number, value: number): number => {
        return accumulator + value;
    }, 0);

    return Math.round(percentSum / ratingPercentList.length);
}
