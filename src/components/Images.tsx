import React from "react";
import '../css/images.css';

type Image = {
    id: number;
    image: string;
    name: string;
}

type ImagesProps = {
    imagesData: Array<Image>;
};

const Images = ({ imagesData }: ImagesProps) => {
    if(!imagesData || !imagesData.length) {
        return null;
    }

    return (
        <div className="images">
            {imagesData.map((image) => {
                console.log(image);
                return (
                    <div className="character" key={image.id}>
                        <img className="img" src={image.image} alt={image.name} loading="lazy" />
                        <h2 className="name">{image.name}</h2>
                    </div>
                )
            })}
        </div>
    );
}

export default React.memo(Images);