import { Command } from '../models/Command';
import { ICommand, FrameType, Template } from '../interfaces/ICommand';

class Test extends Command implements ICommand {
    public template = Template.DefaultHTML;
    public frames = [
        {
            type: FrameType.Image,
            x: 15,
            y: 135,
            width: 293,
            height: 306,
            angle: 0,
        },
    ];
}

export default Test;
