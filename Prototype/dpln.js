
class Layer {
    constructor()
    {
        this.mInputs = math.matrix();
        this.mOutputs = math.matrix();
    }
}

class DPLNClass {
    constructor() {
        this.DP_Inputs = math.matrix();
        this.DP_Layers = [];

        
    }

    CreateModel(NbInput, NbOutput)
    {
        var layer = math.zeros(NbOutput,NbInput);
        this.DP_Layers.push(layer);
        for(var c=0;c<NbOutput;c++)
            for(var l=0;l<NbInput;l++)
                this.DP_Layers[0]._data[c][l] = math.random()*2 - 1;
    }

}

var DPLN = new DPLNClass();
