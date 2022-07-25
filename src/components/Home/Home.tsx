import React from 'react';
import ImageSlider from '../ImageSlider';
import TextBox from '../TextBox';

const Home: React.FC = () => {
    const title = 'Textbox Title';
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vitae corrupti excepturi recusandae aliquid fuga, praesentium maiores doloremque iste quaerat quos blanditiis. Molestias, ratione. Provident natus dolorum rem at minus.';
    return (
        <>
            <div>
                <ImageSlider />
            </div>
            <div>
                <TextBox title={title} text={text} />
                <TextBox title={title} text={text} />
            </div>
        </>
    );
};

export default Home;