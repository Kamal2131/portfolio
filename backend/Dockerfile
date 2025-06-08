###############################
# Stage 1: Install dependencies
###############################
FROM python:3.10-slim AS builder

# Create a working directory
WORKDIR /app

# Install build dependencies (if needed)
RUN apt-get update && \
    apt-get install -y --no-install-recommends gcc build-essential && \
    rm -rf /var/lib/apt/lists/*

# Copy requirements and install them into a separate layer
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install --prefix=/install -r requirements.txt

################################
# Stage 2: Copy code and finalize
################################
FROM python:3.10-slim

WORKDIR /app

# Copy installed dependencies from builder
COPY --from=builder /install /usr/local

# Copy application code
COPY . .

# If you use .env for config, copy it (or set env vars via compose)
# COPY .env .

# Expose port (must match what uvicorn listens on)
EXPOSE 8000

# When running locally in production mode, set Uvicorn to listen on 0.0.0.0:8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
