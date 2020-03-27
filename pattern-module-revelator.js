const result = (() => {
  const x = {} // private 

  return { // public
    a: () => console.log(x),
    b: (key, val) => x[key] = val
  }
})()

result.a()
result.b('data', 'test 1')
result.a()