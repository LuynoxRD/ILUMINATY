{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "openai": {
      "npm": "@ai-sdk/openai",
      "name": "OpenAI",
      "models": {
        "gpt-5.2": {
          "name": "GPT-5.2",
          "tools": true
        },
        "gpt-5.1-codex-max": {
          "name": "GPT-5.1 Codex Max",
          "tools": true
        },
        "gpt-5.3-codex": {
          "name": "GPT-5.3 Codex",
          "tools": true
        }
      }
    },
    "google": {
      "npm": "@ai-sdk/google",
      "name": "Google",
      "models": {
        "gemini-2.5-flash-lite-preview-09-25": {
          "name": "Gemini 2.5 Flash Lite Preview 09-25",
          "tools": true
        },
        "gemini-3-flash-preview": {
          "name": "Gemini 3 Flash Preview",
          "tools": true
        },
        "gemini-3-pro-preview": {
          "name": "Gemini 3 Pro Preview",
          "tools": true
        }
      }
    },
    "openrouter": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "OpenRouter",
      "options": {
        "baseURL": "https://openrouter.ai/api/v1"
      },
      "models": {
        "big-pickle": {
          "name": "Big Pickle",
          "tools": true
        },
        "kimi-k2.5-free": {
          "name": "Kimi K2.5 Free",
          "tools": true
        },
        "minimax-m2.5-free": {
          "name": "MiniMax M2.5 Free",
          "tools": true
        }
      }
    },
    "ollama": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Ollama Local",
      "options": {
        "baseURL": "http://127.0.0.1:11434/v1"
      },
      "models": {
        "qwen2.5-coder:14b": {
          "name": "Qwen Local",
          "tools": true
        }
      }
    }
  },
  "agents": {
    "coder": {
      "model": "openai/gpt-5.3-codex",
      "instructions": "Eres un experto en implementacion de software. Escribe codigo limpio, mantenible y con pruebas cuando aplique. Prioriza calidad, claridad y velocidad de entrega."
    },
    "senior": {
      "model": "openai/gpt-5.2",
      "instructions": "Eres un Ingeniero Senior. Revisa arquitectura, rendimiento, deuda tecnica y riesgos. Propone mejoras concretas y planes de refactor seguros."
    },
    "architect": {
      "model": "openai/gpt-5.1-codex-max",
      "instructions": "Eres arquitecto de software. Define diseno de alto nivel, trade-offs, limites de contexto, contratos entre servicios y escalabilidad."
    },
    "rapid": {
      "model": "google/gemini-3-flash-preview",
      "instructions": "Eres un agente rapido para iteraciones cortas, brainstorming tecnico y prototipos. Entrega respuestas concretas en poco tiempo."
    },
    "triage": {
      "model": "google/gemini-2.5-flash-lite-preview-09-25",
      "instructions": "Tu tarea es clasificar tickets, resumir logs, priorizar incidencias y proponer siguientes pasos minimos viables."
    },
    "pentester": {
      "model": "ollama/qwen2.5-coder:14b",
      "instructions": "Eres un experto en Pentesting. Audita seguridad del codigo, detecta vulnerabilidades, valida configuraciones y propone mitigaciones accionables."
    },
    "optimizer": {
      "model": "openrouter/minimax-m2.5-free",
      "instructions": "Tu foco es optimizacion de rendimiento y costos. Encuentra cuellos de botella, mejora complejidad y reduce consumo de recursos."
    },
    "creative": {
      "model": "ollama/qwen2.5-coder:14b",
      "instructions": "Tu foco es ideacion creativa de producto y UX writing. Genera propuestas originales, naming, microcopy y conceptos de interfaz."
    },
    "local": {
      "model": "ollama/qwen2.5-coder:14b",
      "instructions": "Eres el agente local para trabajo offline y tareas de codificacion general. Mantienes consistencia del proyecto y evitas depender de internet."
    }
  }
}