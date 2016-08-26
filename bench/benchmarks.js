window.mapboxglBenchmarks = window.mapboxglBenchmarks || {};

var targetName = process.env.BENCHMARK_TARGET;
function registerBenchmark(benchmarkName, benchmark) {
    window.mapboxglBenchmarks[benchmarkName] = window.mapboxglBenchmarks[benchmarkName] || {};
    window.mapboxglBenchmarks[benchmarkName][targetName] = benchmark;
}

registerBenchmark('map-load', require('./benchmarks/map_load'));
registerBenchmark('buffer', require('./benchmarks/buffer'));
registerBenchmark('fps', require('./benchmarks/fps'));
registerBenchmark('frame-duration', require('./benchmarks/frame_duration'));
registerBenchmark('query-point', require('./benchmarks/query_point'));
registerBenchmark('query-box', require('./benchmarks/query_box'));
registerBenchmark('geojson-setdata-small', require('./benchmarks/geojson_setdata_small'));
registerBenchmark('geojson-setdata-large', require('./benchmarks/geojson_setdata_large'));
