export default {
  methods: {
    getSearchParams() {
      const params = {}
      for (let key in this.searchForm) {
        const value = this.searchForm[key]
        if (typeof value === 'string' && value.length > 0) {
          params[key] = value
        } else if (typeof value === 'number' || typeof value === 'boolean') {
          params[key] = value
        } else if (value instanceof Array && value.length > 0) {
          params[key] = value
        }
      }

      this.privateSearchParams && this.privateSearchParams(params)
      return params
    },
    changeSearch(params) {
      this.searchForm.current = 1
      if (params) {
        for (let key in params) {
          this.searchForm[key] = params[key]
        }
      }
      this.doSearch()
    },
    changePage(pageNum) {
      this.searchForm.current = pageNum
      this.doSearch()
    },
    doSearch() {
      let query = this.getSearchParams()
      this.$router.push({
        name: this.$route.name,
        query
      })
      this.getTableList()
    }
  },
  mounted() {
    this.initSearchParams()
    this.getTableList()
  },
  watch: {
    $route(to, from) {
      // console.log('to', to.query)
      if(!Object.keys(to.query).length) {
        this.initSearchParams()
        this.getTableList()
      }
    }
  }
}
