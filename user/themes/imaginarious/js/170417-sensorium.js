/*
 Copyright 2017 Keith Peters

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var canvasParent = document.getElementById('bg-canvas');
var context = bitlib.context(0, 0, canvasParent),
    width = context.width,
    height = context.height;

canvasParent.firstElementChild.setAttribute('id', 'defaultCanvas0');

var state = {
    scale:          0.01,
    speed:          0.02,
    max_scale:      15,
    count:          100,
    hue_shift:      50,
    hue:            bitlib.random.int(0, 360),
    saturation:     1,
    lightness:      0.6,
    bg_hue:         bitlib.random.int(0, 360),
    bg_saturation:  0.4,
    bg_lightness:   1,
    bg_transparent: false,
    z:              0,
    operatorIndex:  6,
}

var operators = [
    'destination-out',
    'xor',
    'multiply',
    'screen',
    'overlay',
    'darken',
    'lighten',
    'color-dodge',
    'color-burn',
    'hard-light',
    'soft-light',
    'difference',
    'exclusion',
    'hue',
    'saturation',
    'color',
    'luminosity',
]

function set_slider_params(prop, min, max, step, value) {
    var sliders = document.getElementsByClassName('slider '+prop);
    for (var i = 0; i < sliders.length; i++) {
        sliders[i].min       = min;
        sliders[i].max       = max;
        sliders[i].step      = step;
        sliders[i].value     = value;
    }    
}

// set parameters of input elements on load
set_slider_params('max_scale',     1.0,   30.0,  0.01, state.max_scale);
set_slider_params('count',         1.0,  500.0,  1.00, state.count);
set_slider_params('hue',           0.0,  360.0,  1.00, state.hue);
set_slider_params('bg_hue',        0.0,  360.0,  1.00, state.bg_hue);
set_slider_params('bg_saturation', 0.0,    1.0,  0.01, state.bg_saturation);
set_slider_params('operatorIndex', 0,  operators.length, 1, state.operatorIndex);

// handler for all sliders
function set_state(prop, value) {
    // set js var value
    propVal = parseFloat(value);
    state[prop] = propVal;

    // sync all slider inputs
    var sliders_for_prop = document.getElementsByClassName('slider '+prop);
    for (var i = 0; i < sliders_for_prop.length; i++) {
        sliders_for_prop[i].value = propVal;
    }
}


bitlib.anim(update).start();

function update() {
    bitlib.random.seed(0);
    context.save();
    if (state.bg_transparent) {
        context.clear();
    }
    else {
        context.clear(bitlib.color.hsv(state.bg_hue, state.bg_saturation, state.bg_lightness));
    }
    context.globalCompositeOperation = operators[state.operatorIndex];

    

    for(var i = 0; i < state.count; i++) {
        draw();
    }

    context.restore();
    state.z += state.speed;

}

function draw() {
    var r = bitlib.random.float(0, height / 2 - 40),
        a = bitlib.random.float(Math.PI * 2),
        x = width / 2 + Math.cos(a) * r,
        y = height / 2 + Math.sin(a) * r,
        s   = bitlib.math.map(noise.perlin3(x * state.scale, y * state.scale, state.z), -1, 1, 0, state.max_scale);

    var gradient = context.createLinearGradient(0, -5, 0, 5);
    gradient.addColorStop(0, "#ffffff");
    gradient.addColorStop(1, bitlib.color.hsv(state.hue + (s * state.hue_shift), state.saturation, state.lightness));
    context.fillStyle = gradient;

    context.save();
    context.translate(x, y);
    context.rotate(bitlib.random.float(-0.75, -0.25));
    context.scale(s, s);
    context.fillCircle(0, 0, 5);
    context.restore();

}

function resize() {
    width = context.width  = context.canvas.width = window.innerWidth;
    height = context.height = context.canvas.height = window.innerHeight;
}
window.onresize = resize;