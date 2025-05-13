import { useApplication, extend } from '@pixi/react'
import { Container, Text } from 'pixi.js'

extend({
    Container,
    Text,
});

function PixiApp() {
    const { app } = useApplication();

    //console.log(app);

    return (
        <pixiContainer>
            <pixiText text={"Hello, world!"} x={325} y={(200)}/>
        </pixiContainer>
    );
}

export default PixiApp;