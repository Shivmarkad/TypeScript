// enum is set of related value, as set of descriptive constant
var options;
(function (options) {
    options[options["READY"] = 0] = "READY";
    options[options["NOT_READY"] = 1] = "NOT_READY";
})(options || (options = {}));
console.log(options.NOT_READY);
