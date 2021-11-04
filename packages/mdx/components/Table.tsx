import { Table } from '@nico-bachner/components-react'
import { styled } from '@nico-bachner/css'
import { spacing, utils } from '@nico-bachner/design-tokens'

const Wrapper = styled('div', {
    marginBlock: spacing[8],
    maxWidth: utils.sizes.md,
})

const Root: React.FC = ({ children }) => (
    <Wrapper>
        <Table.Root>{children}</Table.Root>
    </Wrapper>
)

const HeadItem: React.FC = ({ children }) => (
    <Table.Item type="head">{children}</Table.Item>
)

const BodyItem: React.FC = ({ children }) => (
    <Table.Item type="body">{children}</Table.Item>
)

const MDXTable = {
    table: Root,
    thead: Table.Head,
    tbody: Table.Body,
    tr: Table.Row,
    th: HeadItem,
    td: BodyItem,
}

export default MDXTable
