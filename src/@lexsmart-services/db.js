import './data/apps/DocumentService'
import './data/apps/RepositoryService'
import mock from './mock'

mock.onAny().passThrough() // forwards the matched request over network
