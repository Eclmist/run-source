const js_slang = require('js-slang');
const fs = require('fs');
process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const config = require('config');
const runes2D = require('./src/ext/two_dim_runes').TwoDimRunesExternal;

exports.runSource = runSource;
function runSource(path) {

    // Read code from path specified
    let code = '';
    try {
        code = fs.readFileSync(path, 'utf-8');
    } catch (e) {
        console.error('Error: Cannot find entry point \'' + path + '\'!');
        return;
    }

    // Debug
    code = 'show(nova_bb)';

    // Load chapter
    const chapter = config.get('source-chapter');

    // Load external symbols
    const symbols = runes2D;

    // Setup context
    const context = js_slang.createContext(
        chapter,
        symbols,
        undefined
    );

    console.log('sdfd');
    // Setup webgl
    getReadyWebGLForCanvas('2d');

    js_slang.runInContext(code, context, null).then(res => {
        if (res.status === 'error') {
            console.log(js_slang.parseError(context.errors));
            return;
        }
        console.log(res.status);
        console.log(res.value);
    });
}