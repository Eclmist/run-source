const js_slang = require('js-slang');
const fs = require('fs');
process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const config = require('config');

exports.runSource = runSource;
function runSource(path) {
    let code = '';
    try {
        code = fs.readFileSync(path, 'utf-8');
    } catch (e) {
        console.error('Error: Cannot find entry point \'' + path + '\'!');
        return;
    }
    const context = js_slang.createContext();
    context.chapter = config.get('source-chapter');

    js_slang.runInContext(code, context, null).then(res => {
        if (res.status === 'error') {
            console.log(js_slang.parseError(context.errors));
            return;
        }
        console.log(res.status);
        console.log(res.value);
    });
}