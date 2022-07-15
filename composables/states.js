import { isMobile, DEFAULT_USER_AGENT } from '@/helpers/device'

export const useIsMobile = () => useState('userAgent', () => {
  const { 'user-agent': userAgent } = useRequestHeaders(['user-agent']) || { 'user-agent': DEFAULT_USER_AGENT }
  return isMobile(userAgent)
})
