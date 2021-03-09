!function (G) {
  G._ = {};

  function flow(fns) {
    return function (...args) {
      const [f1, ...fs] = fns;

      return fs.reduce((acc, f) => {
        return f(acc);
      }, f1(...args));
    };
  }

  function curry(fn) {
    const l = fn.length, params = [];

    return function recur(...args) {
      params.push(...args);
      if (params.length < l) {
        return recur;
      } else {
        return fn(...params);
      }
    };
  }

  _.each = curry((list, iter) => {
    for (let v of list) {
      iter(v);
    }
    return list;
  });

  _.map = curry((list, mapper) => {
    let result = [];
    for (let v of list) {
      result.push(mapper(v));
    }
    return result;
  });

  _.filter = curry((list, predicate) => {
    let result = [];
    _.each((v) => {
      if (predicate(v)) result.push(v);
    })(list);
    return result;
  });

  const not = (v) => !v;
  _.not = not;
  _.identity = (v) => v;
  _.always = (v) => () => v;

  _.reject = curry((list, predicate) => (
    _.filter(_.pipe(predicate, not))(list)
  ));

  _.reduce = (list, reducer, acc) => {
    let _list = [...list], _acc = acc || _list.shift();
    _.each((v) => _acc = reducer(_acc, v))(list);
    return _acc;
  };

  _.pipe = (...fns) => (v) => _.reduce(fns, (v, f) => f(v), v);

  _.tap = (...fns) =>
    (v) => {
      _.pipe(...fns)(v);
      return v;
    };

  _.hi = _.tap(console.log);
}(window);
