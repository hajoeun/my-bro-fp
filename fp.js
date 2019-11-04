!function(G) {
  G._ = {};

  _.each = (list, iter) => {
    for (let v of list) {
      iter(v);
    }
    return list;
  };

  _.map = (list, iter) => {
    let result = [];
    _.each(list, (v) => {
      result.push(iter(v))
    });
    return result;
  };

  _.filter = (list, predicate) => {
    let result = [];
    _.each(list, (v) => {
      if (predicate(v)) result.push(v);
    });
    return result;
  };

  _.reject = (list, predicate) => (
    _.filter(list, (v) => !predicate(v))
  );

  _.find = (list, predicate) => {
    for (let v of list) {
      if (predicate(v)) return v;
    }
  };

  _.reduce = (list, reducer, acc) => {
    let _list = [...list], _acc = acc || _list.shift();
    return _list.reduce(reducer, _acc);
  }
}(window);