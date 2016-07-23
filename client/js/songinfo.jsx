var SongInfo = React.createClass({
  render : function(){
    var imgSize = {'width': '150px'}
    return (
      <div className="center">
        <img style={imgSize} className="currentImg" src={this.props.song.album.images[1].url}/>
      </div>
    )
  }
})
