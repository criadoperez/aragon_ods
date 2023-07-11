import React from 'react';
import { type IconType } from '../../icons';

export const Book: IconType = ({ height = 160, width = 160, ...props }) => {
    return (
        <svg width={width} height={height} fill="none" viewBox="0 0 160 160" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41.7 49.903V42.099C41.7 41.7688 41.9028 41.4725 42.2107 41.3532C46.4345 39.7154 53.3672 38.6663 60.54 40.7946C67.5484 42.8741 74.7233 47.9696 79.7962 58.3592C84.0618 55.1555 91.0178 51.3321 99.0371 49.531C107.589 47.6103 117.41 47.9796 126.44 53.9311C126.665 54.0791 126.8 54.3301 126.8 54.599V56.804C129.693 56.8934 132.095 58.2506 133 58.9747C133.189 59.1265 133.3 59.3563 133.3 59.5994V119.599C133.3 120.041 132.942 120.399 132.5 120.399H27.5C27.0581 120.399 26.7 120.041 26.7 119.599V60.0994C26.7 59.7386 26.9414 59.4225 27.2895 59.3275L32.7 57.852V54.0994C32.7 53.8319 32.8336 53.5821 33.0562 53.4337C34.5043 52.4683 38.1335 50.4926 41.7 49.903ZM43.3 42.6552V103.092C60.8936 99.2451 73.336 108.871 78.7 116.358V59.776C73.7958 49.2846 66.8006 44.3212 60.0849 42.3285C53.5845 40.3997 47.2844 41.2372 43.3 42.6552ZM76.1764 118.799C67.9065 112.799 50.9269 106.011 33.8985 115.793C33.6509 115.935 33.3463 115.935 33.0992 115.792C32.8521 115.649 32.7 115.385 32.7 115.099V59.5104L28.3 60.7104V118.799H76.1764ZM82.8983 118.799H131.7V60.0049C130.812 59.4042 128.958 58.4847 126.8 58.4049V115.599C126.8 115.923 126.605 116.214 126.306 116.338C126.007 116.462 125.663 116.394 125.434 116.165C120.921 111.651 106.412 105.265 82.8983 118.799ZM78.0031 118.17C69.9744 111.953 52.3033 104.174 34.3 113.743V54.5358C35.7969 53.6029 38.7937 52.067 41.7 51.5273V104.099C41.7 104.345 41.8128 104.577 42.0061 104.728C42.1994 104.88 42.4516 104.935 42.6902 104.876C60.7193 100.461 73.2243 110.854 78.0031 118.17ZM80.2999 59.9877C84.3529 56.8385 91.3221 52.9036 99.3878 51.0921C107.529 49.2637 116.729 49.6083 125.2 55.0333V113.837C118.843 108.909 103.439 104.439 80.2999 118.477V59.9877Z"
                fill="#001F5C"
            />
            <path
                d="M94.833 68.9005L94.8327 48.962C101.228 45.5888 108.861 45.2532 115.508 48.0996L115.508 68.9406C115.508 69.7633 114.57 70.234 113.91 69.7423L105 63.0996L96.4434 69.6926C95.7859 70.1992 94.8331 69.7305 94.833 68.9005Z"
                fill="#3164FA"
            />
        </svg>
    );
};
