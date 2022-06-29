package query

type GetTask struct {
	Deleted interface{} `query:"deleted"`
	Limit   interface{} `query:"limit"`
	Offset  interface{} `query:"offset"`
}
