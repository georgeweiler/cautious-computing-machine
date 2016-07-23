var Controls = React.createClass({
  getInitialState: function() {
    return ({queueList:[], filterList:[]});
  },

  componentWillMount: function() {
    this.search();
  },

  search: _.debounce(function(search){
    $.get("/api/spotify/" + search, function(data) {
      console.log(data)
      this.setState({'filterList': data});
    }.bind(this));
  }, 1000),

  findSongs: function(e) {
    var htmlName = (e.target.value).replace(/\s/gi,'%20');
    this.search(htmlName+'&type=artist')
  },
  addTrack: function(track) {
    var newQueueList = this.state.queueList;
    var newCurrentSong = this.state.currentSong || track;
    newQueueList.push(track);
    this.setState({queueList : newQueueList, currentSong: newCurrentSong});
  },
  filterTrack: function(e) {
    this.search(e.target.value);
  },
  skipSong: function() {
    var newCurrentSong = this.state.queueList[1] || null;
    if (this.state.queueList.length) {
      var newQueueList = this.state.queueList.slice(1)
    }
    this.setState({queueList: newQueueList, currentSong: newCurrentSong});
  },

  render: function() {
    var centerStyle = {margin: '0 auto', width: '100%'};
    var queue = this.state.queueList.slice(1);
    return (
      <div style={centerStyle}>
        <div className="col-md-4">
          <div style={centerStyle}>
            <input type="text" onChange={this.findSongs} className="search" placeholder="Search for artists" style={{width: '100%'}}></input>
          </div>
          <div className="trackList">
            <Tracklist addTrack = {this.addTrack} tracks={this.state.filterList}  />
          </div>
        </div>
        <div className="col-md-8">
          <div>
            <Songplayer handleSkip = {this.skipSong} song = {this.state.currentSong} />
          </div>
          <div>
            <Playlist queue = {queue}/>
          </div>
        </div>
      </div>
    );
  }
});
