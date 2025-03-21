import { IsArray, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLayoutDto {
  @IsArray()
  @ApiProperty({
    description: 'An array of section objects that make up the layout.',
    type: [Object],
    example: [
      {
        id: 'id',
        sectionTitle: "sectionTitle",
        sectionOrder: 0,
        type: "TEXT",
        subTitle: "subTitle",
        text: "text",
      },
      {
        id: 'id',
        sectionTitle: "sectionTitle",
        sectionOrder: 0,
        type: "SLIDER",
        centralMode: true,
        slideItems: [
          {
            id: 'id',
            title: "title",
            description: "description",
            thumbnailHref: "thumbnailHref",
            redirectHref: "redirectHref",
            order: 0
          }
        ]
      },
      {
        id: 'id',
        sectionTitle: "sectionTitle",
        sectionOrder: 0,
        type: "GRID",
        gridItems: [
          {
            id: 'id',
            title: "title",
            thumbnailHref: "thumbnailHref",
            order: 0,
            redirectHref: "redirectHref",
          }
        ],
      },
      {
        id: 'id',
        sectionTitle: "sectionTitle",
        sectionOrder: 0,
        type: "BANNER",
        subTitle: "subTitle",
        text: "text",
        thumbnailHref: "thumbnailHref",
        imgOrientation: "LEFT",
      }
    ],
  })
  sections: object[];

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({
    description: 'Flag indicating whether the layout is active.',
    example: true,
  })
  isActive?: boolean;
}

export class UpdateLayoutDto {
  @IsOptional()
  @IsArray()
  @ApiPropertyOptional({
    description: 'Updated array of section objects.',
    type: [Object],
    example: [
      {
        id: 'id',
        sectionTitle: "sectionTitle",
        sectionOrder: 0,
        type: "TEXT",
        subTitle: "subTitle",
        text: "text",
      },
      {
        id: 'id',
        sectionTitle: "sectionTitle",
        sectionOrder: 0,
        type: "SLIDER",
        centralMode: true,
        slideItems: [
          {
            id: 'id',
            title: "title",
            description: "description",
            thumbnailHref: "thumbnailHref",
            redirectHref: "redirectHref",
            order: 0
          }
        ]
      },
      {
        id: 'id',
        sectionTitle: "sectionTitle",
        sectionOrder: 0,
        type: "GRID",
        gridItems: [
          {
            id: 'id',
            title: "title",
            thumbnailHref: "thumbnailHref",
            order: 0,
            redirectHref: "redirectHref",
          }
        ],
      },
      {
        id: 'id',
        sectionTitle: "sectionTitle",
        sectionOrder: 0,
        type: "BANNER",
        subTitle: "subTitle",
        text: "text",
        thumbnailHref: "thumbnailHref",
        imgOrientation: "LEFT",
      }
    ],
  })
  sections?: object[];

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({
    description: 'Updated active flag for the layout.',
    example: false,
  })
  isActive?: boolean;
}
