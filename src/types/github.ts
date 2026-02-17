export interface GithubApiUser {
  id: number
  login: string
  avatar_url: string
  html_url: string
  type: string
}

export interface SearchResponse {
  items: GithubApiUser[]
}

export interface UserCardModel {
  instanceId: string
  githubId: number
  login: string
  avatarUrl: string
  profileUrl: string
  type: string
  duplicatedFromId: string | null
}
