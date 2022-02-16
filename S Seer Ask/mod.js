
module.exports = {
  title: "[S] Seer Ask", 
  summary: "Adds audio to page 005539",
  author: "waitingforrobots",
  modVersion: 0.2,
  locked: "002000",

  description: `Adds track Seer: Ask by Toby Fox to corresponding page.`,

  routes: {
    'assets://storyfiles/hs2/03636/03636.swf': './03636.swf',
  },
  
	edit(archive) {
		const unite = archive.mspa.story['005539']
    archive.music.flashes['005539'] = {
      "date": "2012-07-09T01:00:00.000Z",
      "tracks": [ "Seer: Ask - Toby 'Radiation' Fox" ]
    }
	    archive.mspa.story['005539'].title = 
        archive.mspa.story['005539'].title.replace(
            "Seer: Ask.", 
            "[S] Seer: Ask"
        )
}
	}



