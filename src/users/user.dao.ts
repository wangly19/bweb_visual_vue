import { ApiProperty } from "@nestjs/swagger"

export class userList{
    @ApiProperty({description: '分页数量'})
    limit: number
    @ApiProperty({description: '页码 '})
    currentPage: number
    @ApiProperty({description: '用户名'})
    user?: string
    @ApiProperty({description: '姓名'})
    name?: string
}