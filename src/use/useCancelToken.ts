import type { AxiosRequestConfig, Canceler } from 'axios'

class CancelToken {
  private pending: Map<string, Canceler> = new Map()
  private whiteRequest: string[] = []

  private getUrl(config: AxiosRequestConfig) {
    return [config.method, config.url].join('&')
  }

  public addPending(config: AxiosRequestConfig) {
    const url = this.getUrl(config)

    config.cancelToken = new axios.CancelToken((cancel) => {
      if (!this.pending.has(url)) {
        // 如果 pending 中不存在当前请求，则添加进去
        this.pending.set(url, cancel)
      }
    })
  }

  public removePending(config: AxiosRequestConfig) {
    const url = this.getUrl(config)
    const method = url.split('&')[1]

    if (this.pending.has(url) && !this.whiteRequest.includes(method)) {
      // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
      const cancel = this.pending.get(url)
      cancel!(url)
      this.pending.delete(url)
    }
  }

  public clearPending() {
    for (const [url, cancel] of this.pending)
      cancel(url)

    this.pending.clear()
  }
}

export const cancelTokenIns = new CancelToken()
