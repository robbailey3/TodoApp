package query

type TaskQuery struct {
	Completed bool `query:"completed"`
	Deleted   bool `query:"deleted"`
	Limit     int  `query:"limit"`
	Offset    int  `query:"offset"`
}
