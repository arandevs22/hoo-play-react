export const Video = () => {
    return (
        <>
            <video controls="controls">
                <source src="http://185.223.160.3/Series/2023/Velma/S01/480p/Velma.S01E01.480p.WEBRip.x264.RMT.Sermovie.mkv" type="video/mp4" />
                <track
                    label="Spanish"
                    kind="subtitles"
                    srcLang="es"
                    src="https://www.dropbox.com/s/a9dic5w9jx7s3lm/velma_s01_e01.srt?raw=1"
                    default
                />
            </video>
        </>
    )
}