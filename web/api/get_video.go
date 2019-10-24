package api

import (
	"github.com/labstack/echo"
	"github.com/sirupsen/logrus"
	"github.com/valyala/fasthttp"
	"google.golang.org/api/youtube/v3"
	"github.com/k0kubun/pp"
)

type VideoResponse struct {
	VideoList *youtube.VideoListResponse `json:"video_list"`
}

func GetVideo() echo.HandlerFunc {
	return func(c echo.Context) error {
		yts := c.Get("yts").(*youtube.Service)
		videoId := c.Param("id")
		pp.Print(videoId)
		call := yts.Videos.List("id, snippet").Id(videoId)
		res, err := call.Do()

		if err != nil {
			logrus.Fatalf("Error calling Youtube API: %v", err)
		}

		v := VideoResponse{
			VideoList:res,
		}

		return c.JSON(fasthttp.StatusOK, v)
	}
}