import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

export function CreateLayoutSwagger() {
  return applyDecorators(
    ApiOperation({ summary: 'Create a new layout' }),
    ApiResponse({ status: 201, description: 'The layout has been successfully created.' }),
    ApiResponse({ status: 400, description: 'Invalid input.' }),
  );
}

export function UpdateLayoutSwagger() {
  return applyDecorators(
    ApiOperation({ summary: 'Update an existing layout by ID' }),
    ApiParam({ name: 'id', description: 'The ID of the layout to update' }),
    ApiResponse({ status: 200, description: 'The layout has been successfully updated.' }),
    ApiResponse({ status: 404, description: 'Layout not found.' }),
  );
}

export function DeleteLayoutSwagger() {
  return applyDecorators(
    ApiOperation({ summary: 'Delete a layout by ID' }),
    ApiParam({ name: 'id', description: 'The ID of the layout to delete' }),
    ApiResponse({ status: 200, description: 'The layout has been successfully deleted.' }),
    ApiResponse({ status: 404, description: 'Layout not found.' }),
  );
}

export function GetAllLayoutsSwagger() {
  return applyDecorators(
    ApiOperation({ summary: 'Get all layouts' }),
    ApiResponse({ status: 200, description: 'List of all layouts returned successfully.' }),
    ApiResponse({ status: 500, description: 'Internal server error.' }),
  );
}

export function GetActiveLayoutSwagger() {
  return applyDecorators(
    ApiOperation({ summary: 'Get the active layout (isActive = true)' }),
    ApiResponse({ status: 200, description: 'Active layout returned successfully.' }),
    ApiResponse({ status: 404, description: 'No active layout found.' }),
    ApiResponse({ status: 500, description: 'Internal server error.' }),
  );
}
