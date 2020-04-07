module.exports = async function(content) {
  const callback = this.async()

  callback(null, content + '\n' + 'if(module.hot){module.hot.decline()}\n')
}
