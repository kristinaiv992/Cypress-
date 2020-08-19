const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

/**

 */
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
  on('task', {
      failed: require('cypress-failed-log/src/failed')
  })
}
