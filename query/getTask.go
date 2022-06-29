package query

type GetTask struct {
	Deleted bool `query:"deleted"`
	Limit   int  `query:"limit"`
	Offset  int  `query:"offset"`
}
